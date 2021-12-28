import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

  const baseUrl = "http://localhost:5000"

  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(()=>{fetchFeedback()},[])

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`${baseUrl}/feedback?_sort=id&_order=desc`)
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

  // Add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch(`${baseUrl}/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()

    setFeedback([data, ...feedback])
  }

  // Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`${baseUrl}/feedback/${id}`, { method: 'DELETE' })

      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Update feedback item
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`${baseUrl}/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    })

    const data = await response.json()

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    )
  }


  // edit a feedback item
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        feedbackEdit: feedbackEdit,
        isLoading: isLoading,
        addFeedback: addFeedback,
        deleteFeedback: deleteFeedback,
        editFeedback: editFeedback,
        updateFeedback: updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;




// {
//   id: 1,
//   text: "this item is from context 1",
//   rating: 8,
// },
// {
//   id: 2,
//   text: "this item is from context 2",
//   rating: 8,
// },
// {
//   id: 3,
//   text: "this item is from context 3",
//   rating: 7,
// },




// // add a feedback item
// const addFeedback = (newFeedback) => {
//   newFeedback.id = uuidv4();
//   setFeedback([newFeedback, ...feedback]);
//   console.log(newFeedback);
// };

// // delete a feedback item
// const deleteFeedback = (id) => {
//   if (window.confirm("Are you sure you want to delete?")) {
//     setFeedback(feedback.filter((item) => item.id !== id));
//     console.log(id, " deleted.");
//   }
// };

// // update a feedback item
// const updateFeedback = (id, updItem) => {
//   // console.log(id, updItem);
//   setFeedback(
//     feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
//   );
// };
// fetch feedback from backend 
// const fetchFeedback = async ()=>{
//   const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)


//   const data = await response.json()

//   // console.log(data)
//   setFeedback(data)
//   setIsLoading(false)
// }
