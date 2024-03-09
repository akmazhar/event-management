const Support = () => {
    return (
       <div>
        <div>
        <div className="flex flex-col items-center justify-center my-16">
            <h1 className="p-3 shadow-2xl mt-5 items-center rounded-3xl bg-base-100">
                <img src="https://i.ibb.co/4sgh1jS/support-0.jpg" alt="" />
            </h1>
            <div className="flex items-center justify-center gap-4 px-2 my-16 md:px-10 lg:px-56">
                <p className="text-2xl">Question:</p>
                <input type="text" name="msg" placeholder="How can I assist you? Type.." className="input input-bordered w-full md:w-2/3 input-info" /> 
                <button className="btn btn-outline btn-accent">Send</button>
            </div>
        </div>
        </div>
        <div className="ml-32 mr-20 mt-32 mb-10 p-5 shadow-2xl rounded-3xl bg-lime-50">
            <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
            </div>
            <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-secondary">Put me on the Council and not make me a Master!??</div>
            </div>
            <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-accent">That's never been done in the history of the Jedi. It's insulting!</div>
            </div>
            <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
            </div>
            <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
            </div>
            <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
            </div>
            <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-error">It's never happened before.</div>
            </div>
        </div>
       </div>

      


    );
};

export default Support;
