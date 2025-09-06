import type { BookingFormData } from '../../types/BookingFormData';

type StepFinishProps = {
  data: BookingFormData;
};

export default function StepFinish({ data }: StepFinishProps) {
  return (
    <div className="flex flex-col gap-4 px-6 pt-4 text-white text-center items-center">
      <h2 className="text-[35px] xl:text-[45px] font-extrabold">Thank you!</h2>
      <p className="text-[18px] xl:text-[22px] font-medium opacity-80">Your request has been submitted.</p>

      <div className="bg-[#1d1d1d] rounded-xl p-4 xl:p-8 text-left mt-4">
        <h3 className="font-bold text-[20px] xl:text-[25px] mb-2 text-center">Booking Summary</h3>
        <ul className="space-y-1 text-[15px] xl:text-[20px]">
          <li><strong>Date:</strong> {data.date?.toLocaleDateString() || 'N/A'}</li>
          <li>
            <strong>Time:</strong>{" "}
            {data.time && data.date
              ? new Date(`${data.date.toDateString()} ${data.time}`).toLocaleTimeString([], {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
              })
              : 'N/A'}
          </li>
          <li><strong>Name:</strong> {data.name || 'N/A'}</li>
          <li><strong>Email:</strong> {data.email || 'N/A'}</li>
          <li><strong>Phone:</strong> {data.phone || 'N/A'}</li>
          <li><strong>Event Location:</strong> {data.eventLocation || 'N/A'}</li>
          <li><strong>Message:</strong> {data.message || 'N/A'}</li>
        </ul>
      </div>

      <p className="text-[15px] xl:text-[19px] text-center opacity-70 mt-3 mb-5 w-75 xl:mt-5 xl:w-100">
        I’ve received your booking request and will get back to you shortly via email or phone.
        If you have any urgent questions, feel free to contact me directly.
      </p>
    </div>
  );
}