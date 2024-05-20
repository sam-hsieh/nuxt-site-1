export function useIntersectionObserver() {
  //引入pinia
  const navStore = useNavStore()

  //定義一個變數用來new IntersectionObserver
  const observer = ref(null);
  //用來判斷dom是否出現在外面的變數
  const isIntersecting = ref(false)
  //創建一變數來承接dom實體
  const elRef = ref(null);
  //創建一個用來執行IntersectionObserver的function，讓前端能夠調用
  //這個function會接收兩個變數 el:要观察的DOM元素，options:位置及一些判斷選項
  const intersectionObserver = (
    el,
    options = { root: null, threshold: "0" },
    //是否隱藏選單，預設是不隱藏
    isHiddenNav=false
  ) => {
    //標準語法是這樣：observer = new IntersectionObserver(callback, options)
    //把callback用箭頭函式直接去接entries
    observer.value = new IntersectionObserver((entries) => {
      //可以看出所有entries觀察器列表
      entries.forEach((item) => {
        //item.isIntersecting是物件是否出現在畫面是：ture/false
        if (item.isIntersecting && isIntersecting.value == false) {
          isIntersecting.value = true
          //如果有設定要讓Nav隱藏的話
          if(isHiddenNav){
            navStore.navVisibility = false
          }
          
          return
        }
        else {
          isIntersecting.value = false
          navStore.navVisibility = true
          return
        }

        // isIntersecting.value = item.isIntersecting
        //console.log(item);
      })

    }, options);
    observer.value.observe(el)
  }




  //停止觀察
  // const unobserve = () => {
  //   observer.value.unobserve(elRef.value);
  // };
  // onUnmounted(() => {
  //   if (observer.value) unobserve();
  // });


  return {
    intersectionObserver, isIntersecting, elRef
  };
}
