import React from "react";

import { Container } from "./styles";
import bgLeft from "assets/images/projections.png";
import bgRight from "assets/images/work_time.png";

function Layout({ children }) {
  return (
    <Container bgLeft={bgLeft} bgRight={bgRight}>
      {children}
    </Container>
  );
}

export default Layout;
