import styled from "styled-components";

//Animation
import { motion } from "framer-motion";

export const SectionsContainer = styled(motion.div)`
  width: 100%;
  min-width: 100%;
  margin: auto;
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

export const Link = styled(motion.a)`
  width: 45%;
  padding: 10px 20px;

  border: 1px solid ${(props) => props.theme.white};
  border-radius: 20px;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};

  cursor: pointer;
  text-align: center;

  font-size: 16px;

  @media (max-width: 790px) {
    width: 100%;
  }

  @media (max-width: 490px) {
    font-size: 14px;
  }
`;

export const Button = styled(motion.button)`
  width: 45%;
  padding: 10px 20px;

  border: 1px solid ${(props) => props.theme.white};
  border-radius: 20px;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};

  cursor: pointer;
  text-align: center;

  font-size: 16px;

  @media (max-width: 790px) {
    width: 100%;
  }

  @media (max-width: 490px) {
    font-size: 14px;
  }
`;
