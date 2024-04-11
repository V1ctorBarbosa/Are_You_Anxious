import styled from "styled-components";

//Animation
import { motion } from "framer-motion";

export const SectionsContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  margin: auto;

  background-color: red;

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 50%;
  margin: auto;

  padding: 20px 30px;
  border-radius: 20px;
  border: solid 1px ${(props) => props.theme.white};
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;

  width: 100%;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 26px;
  text-align: center;
`;

export const Link = styled.a`
  width: 45%;
  padding: 10px 20px;

  border: 1px solid ${(props) => props.theme.white};
  border-radius: 20px;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};

  cursor: pointer;
  text-align: center;
`;

export const Button = styled.button`
  width: 45%;
  padding: 10px 20px;

  border: 1px solid ${(props) => props.theme.white};
  border-radius: 20px;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};

  cursor: pointer;
`;
