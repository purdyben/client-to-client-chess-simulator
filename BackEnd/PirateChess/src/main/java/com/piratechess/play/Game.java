package com.piratechess.play;

import com.piratechess.gameUtil.AlphaBetaPlayer;
import com.piratechess.gameUtil.Board;
import com.piratechess.gameUtil.Player;
import com.piratechess.gameUtil.UserPlayer;

/**
 * Game Struct for those with big dicks
 * @author Colby McKinley
 *
 */
public class Game {

	public Player white= new UserPlayer(), black = new AlphaBetaPlayer(false, 2);
	public Board b;
	int turn = 0;
	public Game(Player white, Player black, Board b) {
		if(white != null)
			this.white = white;
		if(black != null)
			this.black = black;
		this.b = b;
	}
	
	public String moveBlack() {
		return "";
	}
	
	public void incrementTurn() {
		++turn;
	}
	public int getTurn() {
		return turn;
	}
	
	
}
