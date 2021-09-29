const state = {
  currentField: 0,
  isShowField: false,
  fields: [
    '數位生活科技與軟體技術',
    '架構與嵌入式系統',
    '計算、通訊與網路',
    '資料與知識工程',
    'AI與人機互動',
    '生醫工程',
    '製造工程',
  ],
  color: [
    '#98ddca',
    '#d5ecc2',
    '#ffd3b4',
    '#ffaaa7',
    '#fdffbc',
    '#ffeebb',
    '#d4e2d4'
  ]
}

const getters = {
  allFields: state => {
    return state.fields;
  },
  fieldById: state => {
    return (fieldId) => {
      return state.fields[fieldId];
    }
  },
  currentField: state=> {
    return state.currentField;
  },
  colorByFieldId: state => {
    return (fieldId) => {
      return state.color[fieldId];
    }
  }
}

const mutations = {
  setCurrentField: (state, fieldId) => {
    state.currentField = fieldId;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}