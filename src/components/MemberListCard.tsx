interface MemberListCardProps {
  image: string;
  name: string;
}

const MemberListCard = ({ image, name }: MemberListCardProps) => {
  return (
    <div className="relative group cursor-pointer">
      <img
        src={image}
        alt="Image"
        className="w-full h-72 object-cover rounded-lg shadow-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold font-poppins text-white">{name}</h3>
      </div>
    </div>
  );
};

export default MemberListCard;
