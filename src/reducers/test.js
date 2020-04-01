const initialState = {reference: {}, predicted: {}, predictedResults: [] };

export default function testValue(state = initialState, action) {
  if (action.type === "GET_PREDICTED") {
    console.log("called GET PREDICTED", action.payload);
    return { ...state, predicted: {...action.payload} };
  }

  if (action.type === "CHANGE_VALUE") {
    console.log("called CHANGE_VALUE", action.payload);
    return { ...state, reference: {...action.payload} };
  }

  if (action.type === "ON_PROCCED_RESULTS") {
    console.log("called ON_PROCCED_RESULTS", action.payload);
    return { ...state, predictedResults: [...action.payload] };
  }
  return state;

}
