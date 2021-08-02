export const usersSelectors = (state) => {
    return state.usersPage.users
}
export const pageSizeSelectors = (state) => {
    return state.usersPage.pageSize
}
export const totalUsersCountSelectors = (state) => {
    return state.usersPage.totalUsersCount
}
export const currentPageSelectors = (state) => {
    return state.usersPage.currentPage
}
export const isFetchingSelectors = (state) => {
    return state.usersPage.isFetching
}
export const followInProgerssSelectors = (state) => {
    return state.usersPage.followInProgerss
}
export const stateSelector = (state) => {
    return state.usersPage.friendsList

}