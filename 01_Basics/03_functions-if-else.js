function eligibleToVote(age) {
  if (age < 0) {
    console.log("Invalid Input");
  } else if (age < 18) {
    console.log("Not Eligible to Vote");
  } else {
    console.log("Eligible to Vote");
  }
}

eligibleToVote(0); //Not Eligible to Vote
eligibleToVote(18); //Eligible to Vote
eligibleToVote(-1); //Invalid Input


