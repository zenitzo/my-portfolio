// components/LottieAnimation.js
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

const LottieAnimation = ({ url, className }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) =>
        console.error('Error fetching Lottie animation:', error)
      );
  }, [url]);

  if (!animationData) {
    return <div>Loading...</div>;
  }

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className={className}
      autoplay={true}
    />
  );
};

export default LottieAnimation;
