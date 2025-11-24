export default function BrandList() {
  const brands = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex items-center bg-[#F6F6F6] justify-evenly flex-wrap p-4 gap-4 md:gap-0 ">
      {brands.map((index, brand) => (
        <img
          className="relative block"
          key={index}
          src={"/assets/brands/" + (Number(brand) + 1) + ".svg"}
        />
      ))}
    </div>
  );
}
