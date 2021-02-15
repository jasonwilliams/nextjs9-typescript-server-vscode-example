import React from "react";

function testFunction(): string {
  throw new Error("test");
  const a = 1;
  const b: number = 4;
  const c = a + b;
  return c.toFixed(2);
}

function alfa(): string {
  const alfa = "a";
  const beta = "bcc";
  return alfa + beta;
}

const page = () => (
  <div>
    Welcome to next.js! {testFunction()}
    {alfa()}
  </div>
);

export default page;
