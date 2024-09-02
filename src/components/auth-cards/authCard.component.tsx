import { AuthCard, AuthCardsContainer } from "./authCards.styles";
import { motion } from "framer-motion";
const MotionAuthCard = motion(AuthCard);
const MotionAuthCardContainer = motion(AuthCardsContainer);

const cards = [
  {
    badge: "jp",
    front: "こんにちは",
    back: "Привіт",
    additional: '"Привіт, вітаю на Memonero"',
    color: "D6BDFC",
  },
  {
    badge: "en",
    front: "How are you?",
    back: "Як справи?",
    additional: "Lorem ipsum dolor sit amet.",
    color: "FFB4A0",
  },
  {
    badge: "kr",
    front: "만나서 반갑습니다 !",
    back: "Приємно познайомитись",
    additional: "Lorem ipsum dolor sit amet.",
    color: "FEF5E3",
  },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const AuthCards = () => {
  return (
    <MotionAuthCardContainer
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {cards.map((card, index) => (
        <MotionAuthCard
          variants={item}
          key={index}
          className="auth-card"
          color={card.color}
        >
          <div className="badge">{card.badge}</div>
          <div className="text-content">
            <p className="auth-card-front">{card.front}</p>
            <p className="auth-card-back">{card.back}</p>
            <p className="auth-card-additional">{card.additional}</p>
          </div>
        </MotionAuthCard>
      ))}
    </MotionAuthCardContainer>
  );
};

export default AuthCards;
