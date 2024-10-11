

function MemberWrapper({ name, role, image }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-48 w-48 overflow-hidden rounded-full">
        <img
          className="box-border h-48 w-48 object-fill self-center"
          src={image}
          alt=""
        />
      </div>
      <h1 className=" text-center">{name}</h1>
      <h1 className=" text-center">{role}</h1>
    </div>
  );
}

export default MemberWrapper;