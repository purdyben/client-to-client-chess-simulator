package com.piratechess.gameUtil;

import java.util.ArrayList;
import java.util.Random;

/**
 * @author Colby McKinley
 * 
 * This ai probably things better than the 99% of EEs here.
 *
 */
public class ElectricalEngineer extends Player {
	Random rand;

	public ElectricalEngineer(boolean color) {
		super(color);
		rand = new Random();
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
		ArrayList<Move> moves = b.getMoves(color);
		int n = moves.size();
		
		if(n == 0)
			return null;
		int k = rand.nextInt(n);
		return moves.get(k);
	}

}
