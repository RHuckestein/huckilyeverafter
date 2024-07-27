function JakeAndRachael() {
  return (
    <div>
      <h2>Jake and Rachael</h2>
      <form>
        <label>
          Upload Birthday Photos:
          <input type="file" accept="image/*" multiple />
        </label>
        <label>
          Upload Birthday Videos:
          <input type="file" accept="video/*" multiple />
        </label>
        <label>
          Upload Selfies:
          <input type="file" accept="image/*" multiple />
        </label>
      </form>
    </div>
  );
}

export default JakeAndRachael;