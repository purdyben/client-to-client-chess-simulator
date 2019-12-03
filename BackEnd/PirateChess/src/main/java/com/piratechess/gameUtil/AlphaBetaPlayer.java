package com.piratechess.gameUtil;

/**
 * @author Colby McKinley
 *
 */
public class AlphaBetaPlayer extends Player {
	MinimaxAlphaBeta minimax;
	
	/**
	 * @param color
	 */
	public AlphaBetaPlayer(boolean color, int maxDepth) {
		super(color);
		minimax = new MinimaxAlphaBeta(color, maxDepth);
	}

	/**
	 * Function to prompt the player to make a move after the first move has
	 * already been made
	 * 
	 * @param b
	 *            the board to parse
	 * @return the selected move
	 */
	public Move getNextMove(Board b) {
		Move move = minimax.decision(b);
		return move;
	}

}
