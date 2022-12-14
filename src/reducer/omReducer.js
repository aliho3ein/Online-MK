function omReducer(state, despatch) {
  let { type, payload } = despatch;

  switch (type) {
    case "setUser":
      return { ...state, user: payload.username };
    /* Add */
    case "workAdd":
      return { ...state, work: [...state.work, payload.newItem] };
    case "crewAdd":
      return { ...state, crew: [...state.crew, payload.newItem] };
    /*  */
    case "setAction":
      return { ...state, action: payload.act, edit: payload.key };
    /* Edit */
    case "crewEdit":
      let crewList = state.crew.filter((item) => item.key !== payload.key);
      return { ...state, crew: [...crewList, payload.newItem].sort(compare) };
    case "workEdit":
      let workList = state.work.filter((item) => item.key !== payload.key);
      return { ...state, work: [...workList, payload.newItem].sort(compare) };

    /* Get Data */
    default:
      return { ...state, crew: payload.crew, work: payload.work };
  }
}

export default omReducer;

/*================= Sort the List =======================*/
function compare(a, b) {
  if (a.key < b.key) {
    return -1;
  }
  if (a.key > b.key) {
    return 1;
  }
  return 0;
}
