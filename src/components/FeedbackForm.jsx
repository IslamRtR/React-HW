import { useState } from "react";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isValid = name && validateEmail(email) && feedback.length >= 20 && rating > 0 && (rating >= 3 || reason);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setSubmitted(true);
    }
  };
  
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      {submitted ? (
        <p className="text-green-600 text-lg font-semibold">Рахмет, ваш отзыв важен!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Аты-жөнін:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block font-medium">Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" required />
            {!validateEmail(email) && email && <p className="text-red-500 text-sm">Неверный формат email</p>}
          </div>
          <div>
            <label className="block font-medium">Пікір:</label>
            <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} className="w-full p-2 border rounded" required />
            {feedback.length > 0 && feedback.length < 20 && <p className="text-red-500 text-sm">Минимум 20 символов</p>}
          </div>
          <div>
            <label className="block font-medium">Бағалау:</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} onClick={() => setRating(star)} className={`cursor-pointer text-2xl ${rating >= star ? 'text-yellow-500' : 'text-gray-300'}`}>
                  ⭐
                </span>
              ))}
            </div>
          </div>
          {rating > 0 && rating < 3 && (
            <div>
              <label className="block font-medium">Не себепті төмен бағаладыңыз?</label>
              <textarea value={reason} onChange={(e) => setReason(e.target.value)} className="w-full p-2 border rounded" required />
            </div>
          )}
          <button type="submit" disabled={!isValid} className="w-full bg-blue-500 text-white p-2 rounded disabled:opacity-50">Жіберу</button>
        </form>
      )}
    </div>
  );
}
