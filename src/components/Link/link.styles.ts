import styled from "styled-components";

//Animation
import { motion } from "framer-motion";


export const Container = styled(motion.a)`
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