import Ganre2 from "../page";

const ganre = async ({ params }: { params: Promise<{ ganresid: string }> }) => {
  const { ganresid } = await params;
  return (
    <div>
      <Ganre2 />
    </div>
  );
};
export default ganre;
