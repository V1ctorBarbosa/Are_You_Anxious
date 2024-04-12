import styled from "styled-components";

//Animation
import { motion } from "framer-motion";

export const SectionsContainer = styled(motion.div)`
  width: 100%;
  min-width: 100%;
  margin: auto;

  cursor: default;
  background-color: transparent;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  width: 50%;
  margin: auto;

  padding: 20px 30px;
  border-radius: 20px;
  border: solid 1px ${(props) => props.theme.white};

  @media (max-width: 580px) {
    width: 80%;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;

  width: 100%;

  @media (max-width: 790px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Text = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 26px;
  text-align: center;

  @media (max-width: 490px) {
    font-size: 18px;
  }
`;