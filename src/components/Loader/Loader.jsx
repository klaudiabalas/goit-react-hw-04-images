import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#e07cd7"
      ariaLabel="ball-triangle-loading"
      class="loader"
    />
  );
};
