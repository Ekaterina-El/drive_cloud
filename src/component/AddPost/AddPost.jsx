import React from "react";

function AddPost({
  setSelectedFiles,
  changePostTitle,
  addPost,
  postTitle,
  isFetching,
}) {
  const handleChangePostTitle = (e) => changePostTitle(e.target.value);
  const handleSelectedFiles = (e) => setSelectedFiles(e.target.files);

  return (
    <div>
      <input type="text" value={postTitle} onChange={handleChangePostTitle} />
      <input type="file" multiple={true} onChange={handleSelectedFiles}  />
      <button onClick={addPost} disabled={isFetching}>
        Добавить запись
      </button>
    </div>
  );
}

export default AddPost;
