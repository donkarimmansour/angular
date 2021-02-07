/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `my worker response to ${data}`;
  postMessage(response);
});
