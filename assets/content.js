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
      meta: [{ k: '서비스 지역', v: '서울 · 수도권' }, { k: '견적', v: '무료 · 1분 질문지' }, { k: '예약', v: '상담 후 확정' }],
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
    cta: { title: '우리 집에 맞는 청소,\n1분 견적으로 시작하세요.' },
    heads: {
      concerns: { title: '이런 고민,\n먼저 확인합니다.', lead: '집마다 오염의 종류와 정도가 다릅니다. 같은 평수라도 필요한 작업이 달라지는 이유입니다.' },
      types: { title: '상황에 맞는\n청소를 고르세요.', lead: '신축과 구축, 이사 전후, 거주 중. 시작점이 다르면 작업 방법도 달라집니다.' },
      scope: { title: '공간별 작업 범위' },
      work: { title: '결과는\n현장에 남습니다.', lead: '실제 작업 전후 사진만 올립니다. 더 많은 현장 기록은 네이버 블로그에서 보실 수 있습니다.' },
      process: { title: '신청부터 검수까지', lead: '작업 전에 범위와 조건을 먼저 설명드리고, 끝난 뒤에는 함께 확인합니다.' },
      extra: { title: '추가 요금과\n제외 범위' },
      faq: { title: '자주 묻는 질문', lead: '더 궁금한 점은 카카오톡으로 편하게 물어보세요.' }
    }
  },

  business: {
    hero: {
      eyebrow: 'BUSINESS CARE',
      meta: [{ k: '서비스 지역', v: '서울 · 수도권' }, { k: '견적', v: '현장 방문 상담' }, { k: '계약', v: '주기·범위 협의' }],
      title: '매일 쓰는 공간,\n늘 같은 상태로.',
      lead: '사무실, 상가, 병원, 학원, 건물 공용계단. 영업 시간과 동선에 맞춰 정해진 주기로 관리합니다.',
      image: ''
    },
    concerns: [
      { title: '들쭉날쭉한 청소 품질', desc: '사람이 바뀔 때마다 달라지는 결과' },
      { title: '영업 시간과 겹치는 작업', desc: '고객·직원 동선을 방해하는 청소' },
      { title: '화장실·탕비실 위생', desc: '사용량이 많은 공간의 냄새와 오염' },
      { title: '관리 범위가 불분명', desc: '어디까지 해주는지 매번 확인해야 하는 번거로움' }
    ],
    types: [
      { key: 'office', title: '사무실', desc: '업무 공간, 회의실, 탕비실, 화장실을 정해진 주기로 관리합니다.' },
      { key: 'store', title: '상가 · 매장', desc: '영업 전후 시간에 맞춰 매장 바닥, 유리, 진열 공간을 정리합니다.' },
      { key: 'clinic', title: '병원 · 학원', desc: '대기실, 상담실, 교실, 화장실 등 사람이 많이 오가는 공간을 관리합니다.' },
      { key: 'stairs', title: '건물 공용계단', desc: '계단, 복도, 현관, 엘리베이터 주변 공용 공간을 관리합니다.' }
    ],
    scope: [
      { area: '바닥 · 공용 공간', items: ['바닥 먼지 제거와 물걸레', '출입구·현관', '복도·계단', '쓰레기 정리와 배출'] },
      { area: '화장실', items: ['변기·세면대·소변기', '거울·수전', '바닥과 배수구 주변', '소모품 상태 확인'] },
      { area: '탕비실 · 휴게 공간', items: ['싱크대·상판', '테이블', '바닥', '쓰레기 정리'] },
      { area: '유리 · 표면', items: ['출입문 유리', '손잡이·스위치', '난간', '책상 표면(요청 시)'] }
    ],
    scopeNote: '관리 범위와 주기는 현장 방문 상담 후 함께 정합니다.',
    gallery: [
      { title: '사무실', before: '', after: '' },
      { title: '화장실', before: '', after: '' },
      { title: '공용계단', before: '', after: '' }
    ],
    process: [
      { title: '견적 신청', desc: '공간 유형, 면적, 원하는 주기를 알려주세요.' },
      { title: '현장 방문 상담', desc: '공간을 직접 보고 관리 범위와 시간대를 정합니다.' },
      { title: '정기 관리 시작', desc: '정한 주기와 범위에 맞춰 관리합니다.' },
      { title: '점검 · 조정', desc: '관리 상태를 확인하고 필요하면 범위를 조정합니다.' }
    ],
    extra: {
      addedTitle: '별도 상담이 필요한 경우',
      added: ['입주·리모델링 직후 첫 청소', '심한 오염이 쌓인 공간의 초기 작업', '야간·새벽 등 특수 시간대', '고소 작업이 필요한 유리'],
      excluded: ['외벽·외부 유리창 바깥면', '전문 장비가 필요한 설비 세척', '폐기물 대량 처리', '고소·위험 작업']
    },
    extraNote: '관리 범위에 없는 작업은 미리 안내드리고, 동의 없이 추가하지 않습니다.',
    faq: [
      { q: '계약 전에 현장을 봐야 하나요?', a: '네. 공간 상태와 동선을 확인해야 정확한 범위와 견적을 안내드릴 수 있습니다.' },
      { q: '영업 시간 외에도 청소할 수 있나요?', a: '영업 전이나 후 등 원하시는 시간대를 상담 때 함께 정합니다.' },
      { q: '청소 주기는 어떻게 정하나요?', a: '공간 크기와 이용 인원에 맞춰 제안드리고, 운영하면서 조정할 수 있습니다.' },
      { q: '한 번만 청소도 가능한가요?', a: '상담 때 말씀해 주시면 가능 여부와 조건을 안내드립니다.' }
    ],
    cta: { title: '우리 사업장에 맞는 관리,\n방문 상담부터 시작하세요.' },
    heads: {
      concerns: { title: '관리자가 신경 쓰는\n바로 그 부분.', lead: '청소는 매일 반복되지만, 품질이 유지되지 않으면 고객이 먼저 알아챕니다.' },
      types: { title: '공간 유형별\n관리 방식', lead: '공간의 쓰임새가 다르면 관리 순서와 시간대도 달라집니다.' },
      scope: { title: '기본 관리 범위' },
      work: { title: '관리 전후를\n비교해 보세요.', lead: '실제 작업 전후 사진만 올립니다. 더 많은 현장 기록은 네이버 블로그에서 보실 수 있습니다.' },
      process: { title: '정기 계약 절차', lead: '현장을 먼저 보고, 범위와 주기를 정한 뒤 시작합니다.' },
      extra: { title: '별도 상담과\n제외 범위' },
      faq: { title: '자주 묻는 질문', lead: '더 궁금한 점은 카카오톡으로 편하게 물어보세요.' }
    }
  },

  appliance: {
    hero: {
      eyebrow: 'APPLIANCE CARE',
      meta: [{ k: '서비스 지역', v: '서울 · 수도권' }, { k: '제공 품목', v: '에어컨 · 세탁기 · 냉장고' }, { k: '예약', v: '기종 확인 후 확정' }],
      title: '보이지 않는 안쪽까지,\n분해해서 세척합니다.',
      lead: '에어컨, 냉장고, 세탁기. 겉면이 아니라 냄새와 곰팡이가 생기는 안쪽을 관리합니다.',
      image: ''
    },
    concerns: [
      { title: '에어컨 냄새', desc: '켜자마자 나는 퀴퀴한 냄새' },
      { title: '세탁기 검은 가루', desc: '빨래에 묻어 나오는 곰팡이 찌꺼기' },
      { title: '냉장고 얼룩·냄새', desc: '선반과 고무패킹 사이 오염' },
      { title: '약해진 성능', desc: '냉방이 약하거나 세탁 후 냄새' }
    ],
    types: [
      { key: 'aircon', title: '에어컨 분해청소', desc: '벽걸이·스탠드 등 기종을 확인한 뒤 분해 가능한 범위와 세척 방법을 안내합니다.' },
      { key: 'fridge', title: '냉장고 청소', desc: '선반, 서랍, 고무패킹, 내부 벽면의 오염과 냄새를 관리합니다.' },
      { key: 'washer', title: '세탁기 청소', desc: '통돌이·드럼 세탁기의 세탁조와 부품 오염을 세척합니다.' }
    ],
    scope: [
      { area: '에어컨', items: ['필터·커버', '열교환기(냉각핀)', '송풍팬·드레인 주변', '외부 케이스'] },
      { area: '냉장고', items: ['선반·서랍', '내부 벽면', '고무패킹', '외부 손잡이·표면'] },
      { area: '세탁기', items: ['세탁조', '고무패킹(드럼)', '세제 투입구', '필터·배수 주변'] }
    ],
    scopeNote: '기종과 상태에 따라 분해 가능한 범위가 다릅니다. 모델명을 알려주시면 미리 확인해 드립니다.',
    gallery: [
      { title: '에어컨', before: '', after: '' },
      { title: '세탁기', before: '', after: '' },
      { title: '냉장고', before: '', after: '' }
    ],
    process: [
      { title: '견적 신청', desc: '제품 종류, 수량, 모델명을 알려주세요.' },
      { title: '기종 확인 · 일정 확정', desc: '분해 가능 범위와 작업 시간을 먼저 안내드립니다.' },
      { title: '분해 · 세척', desc: '제품에 맞는 방법으로 분해하고 세척합니다.' },
      { title: '조립 · 작동 확인', desc: '조립 후 정상 작동을 함께 확인합니다.' }
    ],
    extra: {
      addedTitle: '추가 확인이 필요한 경우',
      added: ['오염이 심하거나 오래 사용한 제품', '설치 위치가 높거나 좁은 경우', '같은 날 여러 대를 작업하는 경우(일정 조율)'],
      excluded: ['고장 수리·부품 교체', '분해가 불가능한 기종의 내부 세척', '실외기 내부 세척', '건조기·공기청정기 (현재 미제공)']
    },
    extraNote: '작업 전에 제품 상태를 확인하고, 추가 비용이 필요하면 먼저 안내드립니다.',
    faq: [
      { q: '모든 에어컨을 분해할 수 있나요?', a: '기종마다 분해 가능한 범위가 다릅니다. 모델명을 알려주시면 미리 확인해 드립니다.' },
      { q: '모델명은 어디서 보나요?', a: '제품 옆면이나 안쪽에 붙은 라벨에 적혀 있습니다. 사진을 카카오톡으로 보내주셔도 됩니다.' },
      { q: '작업 시간은 얼마나 걸리나요?', a: '제품 종류와 상태에 따라 다르며, 일정 확정 때 예상 시간을 안내드립니다.' },
      { q: '건조기나 공기청정기도 되나요?', a: '현재는 에어컨, 냉장고, 세탁기만 제공하고 있습니다.' }
    ],
    cta: { title: '냄새와 곰팡이,\n안쪽부터 해결하세요.' },
    heads: {
      concerns: { title: '이런 증상이\n있으신가요?', lead: '겉은 깨끗해 보여도 냄새와 곰팡이는 대부분 안쪽에서 생깁니다.' },
      types: { title: '청소할 제품을\n고르세요.', lead: '현재 에어컨, 냉장고, 세탁기 청소를 제공합니다.' },
      scope: { title: '제품별 작업 범위' },
      work: { title: '세척 전후를\n직접 확인하세요.', lead: '실제 작업 전후 사진만 올립니다. 더 많은 현장 기록은 네이버 블로그에서 보실 수 있습니다.' },
      process: { title: '신청부터 작동 확인까지', lead: '기종을 먼저 확인하고, 작업이 끝나면 정상 작동까지 함께 확인합니다.' },
      extra: { title: '추가 확인과\n제외 범위' },
      faq: { title: '자주 묻는 질문', lead: '더 궁금한 점은 카카오톡으로 편하게 물어보세요.' }
    }
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
    },
    business: {
      category: 'business_care',
      steps: [
        { id: 'service', label: '공간 유형', detailKey: 'business_type', type: 'single', title: '어떤 공간을 관리할까요?', options: [
          { label: '사무실', service: '사무실 정기청소' }, { label: '상가 · 매장', service: '상가 정기청소' },
          { label: '병원 · 학원', service: '병원·학원 청소' }, { label: '건물 공용계단', sub: '계단·복도·현관', service: '공용 계단 청소' } ] },
        { id: 'cycle', label: '청소 주기', detailKey: 'cleaning_cycle', type: 'single', title: '원하시는 청소 주기는요?', columns: 2, options: [
          { label: '주 1회' }, { label: '주 2~3회' }, { label: '주 4회 이상' }, { label: '월 1~2회' }, { label: '1회만' }, { label: '상담 후 결정' } ] },
        { id: 'size', label: '면적', type: 'text', field: 'size', title: '관리할 면적은 어느 정도인가요?', hint: '대략적으로 적어주셔도 괜찮아요. 계단은 건물 층수를 적어주세요.', placeholder: '예: 사무실 30평 / 5층 건물 계단', maxlength: 70 },
        { id: 'time', label: '희망 시간대', type: 'single', title: '청소 가능한 시간대는요?', hint: '영업에 방해되지 않는 시간으로 맞춰드려요.', columns: 2, options: [
          { label: '영업 전 (오전)' }, { label: '영업 후 (저녁)' }, { label: '주말' }, { label: '상관없음' } ] },
        { id: 'areas', label: '중점 관리 공간', type: 'multi', title: '특히 신경 써야 할 공간이 있나요?', hint: '여러 개 선택할 수 있어요.', columns: 2, options: [
          { label: '바닥' }, { label: '화장실' }, { label: '탕비실 · 주방' }, { label: '유리 · 출입문' }, { label: '계단 · 복도' }, { label: '쓰레기 배출' } ] },
        { id: 'visit', label: '상담 방식', type: 'single', title: '어떻게 상담받고 싶으세요?', options: [
          { label: '현장 방문 견적', sub: '직접 보고 범위와 견적을 정해요' }, { label: '사진으로 먼저 상담', sub: '카카오톡으로 사진을 보내주세요' } ] },
        { id: 'schedule', type: 'schedule', title: '방문 상담 또는 시작 희망일은요?', hint: '후보 날짜를 함께 적어주시면 일정 잡기가 쉬워요.', options: [
          { label: '오전' }, { label: '오후' }, { label: '상관없어요' } ] },
        { id: 'address', label: '지역', type: 'text', field: 'address', title: '사업장 지역을 알려주세요', hint: '서울·수도권. 견적 단계에서는 동까지만 적어주셔도 돼요.', placeholder: '예: 서울 영등포구 여의도동', maxlength: 200, minlength: 2 },
        { id: 'notes', type: 'notes', title: '더 알려주실 내용이 있나요?', hint: '선택 사항이에요. 출입 방법, 주차, 특이사항 등을 적어주세요.' },
        { id: 'contact', type: 'contact', title: '상담 받으실 연락처를 남겨주세요', hint: '확인 후 연락드립니다. 문의만으로 계약이 확정되지 않아요.' }
      ],
      consentCollect: '이름, 연락처, 공간 유형, 청소 주기, 희망일, 지역, 면적, 견적 질문 답변(시간대·중점 공간 등), 요청 사항, 문의 경로 및 광고 유입 정보(유입 페이지·광고 매개변수)'
    },
    appliance: {
      category: 'appliance_care',
      steps: [
        { id: 'service', label: '청소 제품', type: 'multi', title: '어떤 제품을 청소할까요?', hint: '여러 개 선택할 수 있어요.', options: [
          { label: '에어컨', service: '에어컨 분해청소' }, { label: '세탁기', service: '세탁기 청소' }, { label: '냉장고', service: '냉장고 청소' } ] },
        { id: 'kind', label: '제품 형태', detailKey: 'install_env', type: 'multi', title: '제품 형태를 알려주세요', hint: '해당하는 것을 모두 골라주세요.', columns: 2, options: [
          { label: '벽걸이 에어컨' }, { label: '스탠드 에어컨' }, { label: '천장형(시스템) 에어컨' }, { label: '통돌이 세탁기' }, { label: '드럼 세탁기' }, { label: '일반 냉장고' }, { label: '양문형 냉장고' }, { label: '잘 모르겠어요', none: true } ] },
        { id: 'size', label: '수량', type: 'text', field: 'size', title: '제품별 수량을 알려주세요', placeholder: '예: 벽걸이 2대, 드럼세탁기 1대', maxlength: 70 },
        { id: 'model', label: '모델명', detailKey: 'model_name', type: 'text', field: 'model_name', optional: true, title: '모델명을 알고 계신가요?', hint: '제품 옆면이나 안쪽 라벨에 있어요. 분해 가능 범위를 미리 확인할 수 있어요.', placeholder: '예: AF17B6474TZS', maxlength: 100 },
        { id: 'age', label: '사용 기간', type: 'single', title: '사용하신 지 얼마나 되었나요?', columns: 2, options: [
          { label: '1년 미만' }, { label: '1~3년' }, { label: '3~5년' }, { label: '5년 이상' }, { label: '잘 모르겠어요' } ] },
        { id: 'symptom', label: '증상', type: 'multi', title: '어떤 증상이 있나요?', hint: '여러 개 선택할 수 있어요.', columns: 2, options: [
          { label: '냄새' }, { label: '곰팡이 · 검은 가루' }, { label: '성능 저하' }, { label: '정기 관리' }, { label: '해당 없음', none: true } ] },
        { id: 'schedule', type: 'schedule', title: '희망하시는 날짜와 시간대는요?', hint: '후보 날짜를 함께 적어주시면 일정 잡기가 쉬워요.', options: [
          { label: '오전' }, { label: '오후' }, { label: '상관없어요' } ] },
        { id: 'address', label: '지역', type: 'text', field: 'address', title: '방문할 지역을 알려주세요', hint: '서울·수도권. 견적 단계에서는 동까지만 적어주셔도 돼요.', placeholder: '예: 서울 동작구 상도동', maxlength: 200, minlength: 2 },
        { id: 'notes', type: 'notes', title: '더 알려주실 내용이 있나요?', hint: '선택 사항이에요. 설치 위치, 주차 등을 적어주세요.' },
        { id: 'contact', type: 'contact', title: '견적 받으실 연락처를 남겨주세요', hint: '확인 후 연락드립니다. 문의만으로 예약이 확정되지 않아요.' }
      ],
      consentCollect: '이름, 연락처, 청소 제품, 희망일, 지역, 수량, 모델명, 견적 질문 답변(제품 형태·사용 기간·증상), 요청 사항, 문의 경로 및 광고 유입 정보(유입 페이지·광고 매개변수)'
    }
  },
  sources: ['홈페이지', '네이버 광고', '네이버 블로그', '인스타그램', '당근', '지인 소개']
};
