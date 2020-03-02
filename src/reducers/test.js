const initialState = { };

export default function testValue(state = initialState, action) {
  if (action.type === "CHANGE_VALUE") {
    console.log("called CHANGE_VALUE", action.payload);
    return { ...action.payload };
  }
  return state;
}
