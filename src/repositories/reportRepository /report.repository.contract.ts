import { Page, PageResponse } from "../../utils/page.model"
import Report from "../../entities/report.entity"

export default interface IReportRepository {
    create(create: Report): Promise<Report>
    delete(id: number): Promise<any>
    findMany(page: Page): Promise<PageResponse<Report>>
    findManyWithoutPagination(): Promise<Report[]>
    findOne(id: number): Promise<undefined | Report>
    update(update: Report): Promise<Report>
}
