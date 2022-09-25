const Header = ({selectedTeam, teamMembersCount}) => {
  return (
    <header>
      <h1>Team Member Allocation</h1>
      <h3>{selectedTeam} has {teamMembersCount} members</h3>
    </header>
  )
}
export default Header