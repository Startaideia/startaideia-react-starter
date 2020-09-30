import React from "react";
import { Group, useGroup } from "@startaideia/react-forms";

import { Container, Card, Span } from "./styles";

function TypeSelector({ value, label, icon, small = false }) {
  const { isSelected } = useGroup(value);

  return (
    <Group.Item value={value}>
      <Container className={`${isSelected && "actived"} ${small && "small"}`}>
        <Card className={`${isSelected && "actived"}  ${small && "small"}`}>
          {icon}
        </Card>
        <Span className={`${isSelected && "actived"}  ${small && "small"}`}>
          {label}
        </Span>
      </Container>
    </Group.Item>
  );
}

export default TypeSelector;
