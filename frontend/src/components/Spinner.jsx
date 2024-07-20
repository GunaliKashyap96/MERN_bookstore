import React from "react";

const Spinner = () => {
    return (
        <div className="animate-ping w-16 h-16 m-8 rounded-full bg-sky-600">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    )
}
export default Spinner;