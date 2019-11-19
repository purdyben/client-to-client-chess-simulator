package com.piratechess.play;

import org.springframework.stereotype.Service;

import com.piratechess.gameUtil.Move;
import com.piratechess.gameUtil.Piece;

@Service
public class AIService {


	/**
	 * Returns 1 if player1 wins Returns 0 if draw Returns -1 if player2 wins
	 * Returns 2 to continue
	 */
	public static int play(Game g, Move m, Move ai) {
		Move move;
		int result;
		int turn = 0;

		if (g.getTurn() >= 100)
			return 0;
		move = g.white.getNextMove(g.b);
		if (move == null && g.b.isCheck(g.white.getColor())) // check and can't move
			return -1;
		if (move == null) // no check but can't move
			return 0;

		result = g.b.makeMove(move);
		if (result == -1)
			return (g.white.getColor() == Piece.WHITE) ? -1 : 1; // black wins
		if (result == 1)
			return (g.white.getColor() == Piece.WHITE) ? 1 : -1; // white wins

		move = g.black.getNextMove(g.b);
		ai = move;
		if (move == null && g.b.isCheck(g.white.getColor())) // check and can't move
			return 1;
		if (move == null) // no check but can't move
			return 0;

		result = g.b.makeMove(move);
		if (result == -1)
			return (g.white.getColor() == Piece.WHITE) ? 1 : -1; // black wins
		if (result == 1)
			return (g.white.getColor() == Piece.WHITE) ? -1 : 1; // white wins
		g.incrementTurn();
		return 2;

	}

	public static Move processMove(String move) {
		int x1 = 0, x2 = 0, y1 = 0, y2 = 0;
		switch (move) {
		case "e4":
			x1 = 0;
			x2 = 0;
			y1 = 0;
			y2 = 0;
			break;
		}
		return new Move(x1, x2, y1, y2);
	}
}
