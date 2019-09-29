package com.piratechess.user;

public class UserService {
	
	public void updateRank(User a, User b, User winner) {
		int currentA = a.getRankScore();
		int currentB = b.getRankScore();
		int newScoreA = currentA + currentB;
		int newScoreB = newScoreA;
		if(a.equals(winner)) {
			newScoreA += 400;
			newScoreB -= 400;
			
		}else {
			newScoreA -= 400;
			newScoreB += 400;
		}
		newScoreA /= a.getNumGames();
		newScoreB /= b.getNumGames();
		a.setRankScore(newScoreA);
		b.setRankScore(newScoreB);
	}
}
