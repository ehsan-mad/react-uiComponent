import React, { useState } from "react";

const ListView = () => {
  const [items, setItems] = useState([
    { id: 1, name: "item1", price: 100, isEditing: false },
    { id: 2, name: "item2", price: 200, isEditing: false },
    { id: 3, name: "item3", price: 300, isEditing: false },
    { id: 4, name: "item4", price: 400, isEditing: false },
    { id: 5, name: "item5", price: 500, isEditing: false },
  ]);
  const handleEdit = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isEditing: true } : item
      )
    );
  };
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleSave =(id,newName)=>{
    setItems(items.map((item)=>item.id===id?{...item, name:newName, isEditing:false}:item))
  }

  const handleCancel =(id)=>{
    setItems(items.map((item)=>item.id===id?{...item,isEditing:false}:item))
  }

  return (
    <div className="w-64 mx-auto p-4 bg-white rounded-lg shadow-lg">
      ListView
      <ul className="divide-y divide-gray-300">
        {items.map((item, index) => (
          <li
            key={index}
            className="py-3 px-4 hover:bg-gray-100 rounded-lg transition flex justify-between items-center"
          >
            {item.isEditing ? (
              <input
                type="text"
                defaultValue={item.name}
                onChange={(e) => (item.name = e.target.value)}
                className="border px-2 py-1 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <span>{item.name}</span>
            )}
            <div className="flex gap-2">
              {item.isEditing ? (
                <>
                  <button
                    className="text-emerald-400 hover:text-emerald-700 "
                    onClick={() => handleSave(item.id, item.name)}
                  >
                    Save
                  </button>
                  <button
                    className="text-gray-400 hover:text-gray-700"
                    onClick={() => handleCancel(item.id)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="text-blue-400 hover:text-blue-700 "
                    onClick={() => handleEdit(item.id, item.name)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-400 hover:text-red-700"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
