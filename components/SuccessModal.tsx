export const SuccessModal = () => (
  <>
    {/* <!-- Put this part before </body> tag --> */}
    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
    <label htmlFor="my-modal-4" className="modal cursor-pointer">
      <label className="modal-box relative" htmlFor="">
        <h3 className="text-lg font-bold">Poszło!</h3>
        <p className="py-4">
          Twoja wiadomość została wysłana do naszej centrali.
        </p>
      </label>
    </label>
  </>
);
