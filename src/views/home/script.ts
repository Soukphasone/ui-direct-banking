import { useWebStore } from '@/stores/webStore'
import { get_service } from '@/service/service'
import { TEST_URL } from '@/util/url'

const stoer = useWebStore()

export async function testApi() {
    const { errorStatus, message, data } = await get_service(TEST_URL)
    if (errorStatus == '1') {
        console.error(message)
        console.error(data)
    } else {
        console.log(data)
    }
}

export async function getStoreData() {
    alert(`Message: ${stoer.testStore}`)
}