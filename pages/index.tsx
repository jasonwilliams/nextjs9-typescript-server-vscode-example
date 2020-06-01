function testFunction(): string {
  const a = 1;
  const b: number = 4;
  const c = a + b;
  return c.toFixed(2);
}

export function alfa(): string {
  const alfa = "a";
  const beta = "bcc";
  return alfa + beta;
}

export default () => <div>Welcome to next.js! {testFunction()}</div>;
