"use client";

function test() {
  function handleEvent(e) {
    // console.log('offsetX', e.offsetX);
    // console.log('offsetY', e.offsetY);
    console.log('pageX', e.pageX);
    console.log('pageY', e.pageY);
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <div
        className="w-[200px] h-[200px] bg-teal-600"
        onMouseDown={handleEvent}
      >
        test
      </div>
    </div>
  );
}

export default test;
