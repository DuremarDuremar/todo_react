import React from "react";
import styled from "styled-components";

const StyleApp = styled.div`
  position: relative;
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(77, 28, 25, 1)),
    color-stop(17%, rgba(105, 17, 29, 1)),
    color-stop(40%, rgba(143, 2, 34, 1)),
    color-stop(54%, rgba(143, 2, 34, 1)),
    color-stop(81%, rgba(77, 17, 30, 1)),
    color-stop(100%, rgba(31, 28, 28, 1))
  );
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(77, 28, 25, 1) 0%,
    rgba(105, 17, 29, 1) 17%,
    rgba(143, 2, 34, 1) 40%,
    rgba(143, 2, 34, 1) 54%,
    rgba(77, 17, 30, 1) 81%,
    rgba(31, 28, 28, 1) 100%
  );
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(77, 28, 25, 1) 0%,
    rgba(105, 17, 29, 1) 17%,
    rgba(143, 2, 34, 1) 40%,
    rgba(143, 2, 34, 1) 54%,
    rgba(77, 17, 30, 1) 81%,
    rgba(31, 28, 28, 1) 100%
  );
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(77, 28, 25, 1) 0%,
    rgba(105, 17, 29, 1) 17%,
    rgba(143, 2, 34, 1) 40%,
    rgba(143, 2, 34, 1) 54%,
    rgba(77, 17, 30, 1) 81%,
    rgba(31, 28, 28, 1) 100%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(77, 28, 25, 1) 0%,
    rgba(105, 17, 29, 1) 17%,
    rgba(143, 2, 34, 1) 40%,
    rgba(143, 2, 34, 1) 54%,
    rgba(77, 17, 30, 1) 81%,
    rgba(31, 28, 28, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4d1c19', endColorstr='#1f1c1c', GradientType=1 );
  min-height: 100vh;
  min-width: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppWrapper = styled.div`
  min-width: 400px;
  color: #fff;
  background: rgba(123, 145, 24, 1);
  background: -moz-linear-gradient(
    left,
    rgba(123, 145, 24, 1) 0%,
    rgba(59, 64, 36, 1) 94%,
    rgba(56, 60, 37, 1) 99%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(123, 145, 24, 1)),
    color-stop(94%, rgba(59, 64, 36, 1)),
    color-stop(99%, rgba(56, 60, 37, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(123, 145, 24, 1) 0%,
    rgba(59, 64, 36, 1) 94%,
    rgba(56, 60, 37, 1) 99%
  );
  background: -o-linear-gradient(
    left,
    rgba(123, 145, 24, 1) 0%,
    rgba(59, 64, 36, 1) 94%,
    rgba(56, 60, 37, 1) 99%
  );
  background: -ms-linear-gradient(
    left,
    rgba(123, 145, 24, 1) 0%,
    rgba(59, 64, 36, 1) 94%,
    rgba(56, 60, 37, 1) 99%
  );
  background: linear-gradient(
    to right,
    rgba(123, 145, 24, 1) 0%,
    rgba(59, 64, 36, 1) 94%,
    rgba(56, 60, 37, 1) 99%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7b9118', endColorstr='#383c25', GradientType=1 );
  border-radius: 42px 42px 0px 200px;
  -moz-border-radius: 42px 42px 0px 200px;
  -webkit-border-radius: 42px 42px 0px 200px;
  border: 6px solid #453138;
  padding-left: 10px;
`;

const App = () => {
  return (
    <StyleApp>
      <AppWrapper>335555</AppWrapper>
    </StyleApp>
  );
};

export default App;
