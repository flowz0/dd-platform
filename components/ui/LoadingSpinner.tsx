const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-32">
      <div className="border-4 border-t-4 border-[#E6E6E6] border-solid w-16 h-16 rounded-full animate-spin border-t-[#0080DB]"></div>
    </div>
  );
};

export default LoadingSpinner;