function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'components/member/skills.html',
    scope: {
      member: '='
    }
  };
}