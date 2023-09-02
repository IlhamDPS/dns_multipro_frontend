export interface baseListRespond {
  createTime: string,
  createBy: string,
  updateTime: string,
  updateBy: string,
  deletedTime: string,
  deletedBy: string,
}

export const generateStringPagination = (currentPage: number, PageSize: number, totalData: number) => {
  let startData = (PageSize*0)+1;
  let endData = Number(PageSize)*currentPage; 

  if (totalData < endData ){
    endData = totalData;
  }

  return "Menampilkan "+startData+"-"+endData+" dari "+totalData+" data"
}