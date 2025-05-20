function Add(a, b) {
  const result = a + b;
  console.log(result);
  return result;
}

function isAlive(ping) {
  const pingOneSuccess = ping();
  const pingTwoSuccess = ping();
  const pingThreeSuccess = ping();
  if (pingOneSuccess && pingTwoSuccess && pingThreeSuccess) {
    return true;
  }
  return false;
}

export default Add;
export { isAlive };
