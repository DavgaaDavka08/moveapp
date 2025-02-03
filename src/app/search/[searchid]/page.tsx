import Search2 from "../page";

const search = async ({
  params,
}: {
  params: Promise<{ ganresid: string }>;
}) => {
  const { ganresid } = await params;
  return (
    <div>
      <Search2 />
    </div>
  );
};
export default search;
