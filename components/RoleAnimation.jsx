import { useEffect, useRef, useState } from "react";
import styles from "./RoleAnimation.module.scss";

const RoleAnimation = ({ ...props }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [direction, setDirection] = useState("forward");
  const [roleText, setRoleText] = useState("");
  const roleContainerRef = useRef(null);

  useEffect(() => {
    const animateRole = () => {
      const roles = ["Software Engineer", "Photographer", "Poet", "Chef"];
      const role = roles[currentRoleIndex];
      let newText = "";

      if (direction === "forward") {
        if (currentLetterIndex <= role.length) {
          newText = role.substring(0, currentLetterIndex);
          setCurrentLetterIndex(currentLetterIndex + 1);
        } else {
          // Pause for 2 seconds before starting to disappear
          setTimeout(() => {
            setDirection("backward");
            setCurrentLetterIndex(role.length);
          }, 2000);
          newText = role;
        }
      } else {
        if (currentLetterIndex >= 0) {
          newText = role.substring(0, currentLetterIndex);
          setCurrentLetterIndex(currentLetterIndex - 1);
        } else {
          setDirection("forward");
          setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
          setCurrentLetterIndex(0);
        }
      }

      setRoleText(newText);
    };

    const timer = setTimeout(() => {
      animateRole();
    }, 100);

    return () => clearTimeout(timer);
  }, [currentRoleIndex, currentLetterIndex, direction]);

  return (
    <div ref={roleContainerRef} {...props}>
      {roleText}
      <span className={styles["animate-blink"]}>|</span>
    </div>
  );
};

export default RoleAnimation;
