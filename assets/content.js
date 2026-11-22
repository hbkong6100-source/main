/*
 * 반짝이네 삼촌 홈페이지 콘텐츠 (기본값)
 * ------------------------------------------------------------
 * 문구·사진·FAQ·견적 질문지·연락처·배너를 한 곳에서 관리합니다.
 * 다음 단계에서 관리자 페이지가 이 구조 그대로 Supabase에 저장하고,
 * 홈페이지는 게시된 내용이 있으면 그것을, 없으면 이 기본값을 사용합니다.
 * 사진(image)이 비어 있으면 "사진 등록 예정" 자리 표시가 나옵니다.
 */
window.SITE_CONTENT = {
  version: 1,
  site: {
    brand: '반짝이네 삼촌',
    region: '서울 · 수도권',
    kakaoUrl: 'https://open.kakao.com/o/sbbh6RFh',
    blogUrl: 'https://blog.naver.com/hbkong61000',
    phone: '',
    business: { name: '', owner: '', regNo: '', address: '', email: '' }
  },
  banner: { enabled: false, text: '', link: '' },

  home: {
    eyebrow: 'BANJJAK CLEANING',
    title: '공간마다 다른 청소,\n하나의 기준.',
    lead: '필요한 서비스를 선택하세요. 작업 범위를 확인하고 바로 견적을 받아보실 수 있습니다.',
    services: [
      { key: 'homecare', no: '01', en: 'HOME CARE', title: '입주청소', desc: '입주 · 이사 · 거주청소', href: 'homecare.html', image: '' },
      { key: 'business', no: '02', en: 'BUSINESS CARE', title: '정기청소', desc: '사무실 · 상가 · 병원 · 학원', href: 'business.html', image: '' },
      { key: 'appliance', no: '03', en: 'APPLIANCE CARE', title: '가전청소', desc: '에어컨 · 냉장고 · 세탁기', href: 'appliance.html', image: '' }
    ]
  },

  homecare: {
    hero: {
      eyebrow: 'HOME CARE',
      title: '새 집의 시작은\n보이지 않는 곳부터.',
      lead: '분진, 묵은 때, 곰팡이와 물때까지. 공간의 상태를 먼저 확인하고 그에 맞게 청소합니다.',
      image: ''
    },
    concerns: [
      { title: '신축 분진', desc: '공사 후 남은 미세 분진과 자재 가루' },
      { title: '구축의 묵은 때', desc: '전 거주자의 주방 기름때와 생활 오염' },
      { title: '욕실 물때 · 곰팡이', desc: '실리콘, 줄눈, 배수구 주변 오염' },
      { title: '빠듯한 이사 일정', desc: '이사 전후 정해진 시간 안의 작업' }
    ],
    types: [
      { key: 'new', title: '신축 입주청소', desc: '새로 지은 집의 공사 분진, 보양재 자국, 자재 잔여물을 정리합니다.' },
      { key: 'old', title: '구축 입주청소', desc: '전 거주자의 생활 오염과 묵은 때를 공간별로 집중 관리합니다.' },
      { key: 'move', title: '이사청소', desc: '이사 나가기 전후, 다음 입주를 위한 상태로 정리합니다.' },
      { key: 'live', title: '거주청소', desc: '짐이 있는 상태에서 생활 공간을 중심으로 청소합니다.' }
    ],
    scope: [
      { area: '주방', items: ['상부·하부장 내부와 문짝', '싱크대·상판·수전', '후드 외부', '타일 벽면과 바닥'] },
      { area: '욕실', items: ['세면대·변기·욕조·샤워부스', '타일 물때와 줄눈 오염', '거울·수전 물얼룩', '배수구 주변'] },
      { area: '창틀 · 베란다', items: ['창틀과 레일 먼지', '창문 안쪽 유리면', '방충망', '베란다 바닥'] },
      { area: '방 · 거실 · 바닥', items: ['바닥 전체', '몰딩·걸레받이', '문짝·문틀·손잡이', '스위치·콘센트 커버'] }
    ],
    scopeNote: '세부 범위는 현장 상태에 따라 상담 때 함께 확인합니다.',
    gallery: [
      { title: '주방', before: '', after: '' },
      { title: '욕실', before: '', after: '' },
      { title: '창틀', before: '', after: '' }
    ],
    process: [
      { title: '견적 신청', desc: '질문에 답하면 공간 정보가 정리되어 접수됩니다.' },
      { title: '상담 · 일정 확정', desc: '작업 범위와 견적 조건을 먼저 설명드립니다.' },
      { title: '작업', desc: '공간 상태에 맞는 순서와 방법으로 청소합니다.' },
      { title: '고객 검수', desc: '구역별 결과를 함께 확인하고 마무리합니다.' }
    ],
    extra: {
      added: ['오염도가 심한 경우 (곰팡이, 니코틴, 공사 분진 과다)', '반려동물이 거주했던 집', '엘리베이터가 없는 3층 이상', '스티커·시트지 제거 등 별도 작업'],
      excluded: ['외부 유리창 바깥면', '가전 내부 분해 세척 (별도 서비스)', '원상복구가 필요한 손상 부위', '고소·위험 작업']
    },
    extraNote: '추가 요금이 필요한 경우 작업 전에 먼저 안내드리고, 동의 없이 추가하지 않습니다.',
    faq: [
      { q: '견적을 신청하면 바로 예약되나요?', a: '아닙니다. 신청 내용을 확인한 뒤 견적과 가능한 일정을 안내드리고, 고객님이 확정하실 때 예약됩니다.' },
      { q: '가격은 어떻게 정해지나요?', a: '서비스 종류, 면적, 구조, 오염 상태에 따라 달라집니다. 사진을 카카오톡으로 보내주시면 더 정확하게 안내드립니다.' },
      { q: '청소할 때 집에 있어야 하나요?', a: '시작과 마무리 검수 때 계시면 좋습니다. 일정이 어려우시면 상담 때 방법을 함께 정합니다.' },
      { q: '작업 후 마음에 들지 않는 부분이 있으면요?', a: '검수 때 말씀해 주시면 그 자리에서 다시 확인합니다.' }
    ],
    cta: { title: '우리 집에 맞는 청소,\n1분 견적으로 시작하세요.' }
  },

  /* 입주청소 견적 질문지 — 관리자 페이지에서 질문·선택지를 추가/삭제할 수 있게 될 구조입니다. */
  quote: {
    homecare: {
      category: 'home_care',
      steps: [
        { id: 'service', label: '서비스', type: 'single', title: '어떤 청소가 필요하신가요?', options: [
          { label: '신축 입주청소', sub: '새로 지은 집, 첫 입주 전', service: '입주청소' },
          { label: '구축 입주청소', sub: '누군가 살았던 집에 들어가기 전', service: '입주청소' },
          { label: '이사청소', sub: '이사 나가기 전·후 정리', service: '이사청소' },
          { label: '거주청소', sub: '짐이 있는 상태에서 하는 청소', service: '거주청소' } ] },
        { id: 'house', label: '주거 형태', type: 'single', title: '주거 형태를 알려주세요', columns: 2, options: [
          { label: '아파트' }, { label: '빌라' }, { label: '오피스텔' }, { label: '단독·전원주택' }, { label: '기타', sub: '상가주택 등' } ] },
        { id: 'size', label: '면적', type: 'text', field: 'size', title: '평수(면적)는 어떻게 되나요?', hint: '공급/전용을 구분해 주시면 더 정확해요. 모르시면 대략 적어주셔도 괜찮아요.', placeholder: '예: 공급 32평, 전용 84㎡', maxlength: 70 },
        { id: 'rooms', label: '방', type: 'single', title: '방은 몇 개인가요?', hint: '알파룸 등 작은 방도 포함해 주세요.', columns: 2, options: [
          { label: '방 1개' }, { label: '방 2개' }, { label: '방 3개' }, { label: '방 4개' }, { label: '방 5개 이상' } ] },
        { id: 'baths', label: '화장실', type: 'single', title: '화장실은 몇 개인가요?', columns: 3, options: [
          { label: '1개' }, { label: '2개' }, { label: '3개 이상' } ] },
        { id: 'balcony', label: '베란다', type: 'single', title: '베란다는 몇 개인가요?', hint: '실외기실은 빼고 세어 주세요.', columns: 3, options: [
          { label: '없음' }, { label: '1개' }, { label: '2개' }, { label: '3개' }, { label: '4개 이상' } ] },
        { id: 'storage', label: '수납공간', type: 'multi', title: '청소가 필요한 수납공간이 있나요?', hint: '여러 개 선택할 수 있어요.', columns: 2, options: [
          { label: '드레스룸' }, { label: '팬트리' }, { label: '붙박이장' }, { label: '대형 신발장' }, { label: '해당 없음', none: true } ] },
        { id: 'condition', label: '오염 상태', type: 'single', title: '현재 오염 상태는 어떤가요?', hint: '사진을 카카오톡으로 보내주시면 더 정확하게 안내드려요.', options: [
          { label: '보통', sub: '일반적인 생활 오염' }, { label: '심한 편', sub: '곰팡이·찌든 때·담배 얼룩 등' },
          { label: '인테리어 공사 직후', sub: '분진·자재 가루가 많음' }, { label: '잘 모르겠어요', sub: '상담 때 같이 확인해요' } ] },
        { id: 'special', label: '특이 상황', type: 'multi', title: '해당되는 상황이 있나요?', hint: '작업 준비에 필요해요. 여러 개 선택할 수 있어요.', options: [
          { label: '반려동물이 살았던 집' }, { label: '엘리베이터 없음', sub: '3층 이상' }, { label: '복층 구조' },
          { label: '스티커·시트지 제거' }, { label: '해당 없음', none: true } ] },
        { id: 'addon', label: '관심 추가 서비스', type: 'multi', title: '함께 상담받고 싶은 서비스가 있나요?', hint: '가능 여부와 비용은 상담 때 안내드려요.', columns: 2, options: [
          { label: '줄눈 시공' }, { label: '상판 코팅' }, { label: '에어컨 청소' }, { label: '냉장고 내부' }, { label: '없음', none: true } ] },
        { id: 'schedule', type: 'schedule', title: '희망하시는 날짜와 시간대는요?', hint: '후보 날짜를 함께 적어주시면 일정 잡기가 쉬워요.', options: [
          { label: '오전' }, { label: '오후' }, { label: '상관없어요' } ] },
        { id: 'address', label: '지역', type: 'text', field: 'address', title: '청소할 지역을 알려주세요', hint: '서울·수도권. 견적 단계에서는 동까지만 적어주셔도 돼요.', placeholder: '예: 서울 동작구 상도동', maxlength: 200, minlength: 2 },
        { id: 'notes', type: 'notes', title: '더 알려주실 내용이 있나요?', hint: '선택 사항이에요. 이사 시간, 공사 일정 등을 적어주세요.' },
        { id: 'contact', type: 'contact', title: '견적 받으실 연락처를 남겨주세요', hint: '확인 후 연락드립니다. 문의만으로 예약이 확정되지 않아요.' }
      ],
      consentCollect: '이름, 연락처, 청소 종류, 희망일, 지역, 면적, 견적 질문 답변(주거 형태·구조·오염 상태 등), 요청 사항, 문의 경로 및 광고 유입 정보(유입 페이지·광고 매개변수)'
    }
  },
  sources: ['홈페이지', '네이버 광고', '네이버 블로그', '인스타그램', '당근', '지인 소개']
};
