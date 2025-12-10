const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-[4px] m-[4px]">This is Contact</h1>
      <form>
        <input className="border border-black p-2 m-2" type="text" placeholder="Name" />
        <input className="border border-black p-2 m-2" type="text" placeholder="message" />
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-xl cursor-pointer">
          submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
