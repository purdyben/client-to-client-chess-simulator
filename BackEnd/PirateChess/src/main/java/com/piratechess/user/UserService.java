package com.piratechess.user;

import org.springframework.stereotype.Service;

@Service
public class UserService {

	/**
	 * Updates both players rankings after a game has been played
	 * 
	 * @author Colby McKinley
	 * @param a      - player 1
	 * @param b      - player 2
	 * @param winner - player who won game
	 * @see <a href="https://en.wikipedia.org/wiki/Elo_rating_system">Elo Rating System</a>
	 */
	public void updateRank(User a, User b, User winner) {
		int newScoreA = a.getRankScore() + b.getRankScore();
		int newScoreB = newScoreA;
		if (a.equals(winner)) {
			newScoreA += 400;
			newScoreB -= 400;

		} else {
			newScoreA -= 400;
			newScoreB += 400;
		}
		a.incrementNumGames();
		b.incrementNumGames();
		newScoreA /= a.getNumGames();
		newScoreB /= b.getNumGames();
		if(newScoreA < 0)
			newScoreA = 0;
		if(newScoreB < 0)
			newScoreB = 0;
		a.setRankScore(newScoreA);
		a.setClassification(getRankByScore(newScoreA));
		b.setRankScore(newScoreB);
		b.setClassification(getRankByScore(newScoreB));

	}

	/**
	 * Converts a score to a ranking title
	 * @param score - Elo system value
	 * @return - ranking title
	 */
	public String getRankByScore(int score) {
		if (score >= 2400) {
			return "Senior Master";
		} else if (score >= 2200) {
			return "National Master";
		} else if (score >= 2000) {
			return "Expert";
		} else if (score >= 1800) {
			return "Class A";
		} else if (score >= 1600) {
			return "Class B";
		} else if (score >= 1400) {
			return "Class C";
		} else if (score >= 1200) {
			return "Class D";
		} else if (score >= 1000) {
			return "Class E";
		} else if (score >= 800) {
			return "Class F";
		} else if (score >= 600) {
			return "Class G";
		} else if (score >= 400) {
			return "Class H";
		} else if (score >= 200) {
			return "Class I";
		}
		return "Class J";
	}
}
