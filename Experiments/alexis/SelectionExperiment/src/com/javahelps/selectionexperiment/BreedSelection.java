package com.javahelps.selectionexperiment;

import com.javahelps.selectionexperiment.model.RabbitBreed;

import java.util.ArrayList;
import java.util.List;

public class BreedSelection {
	public String getAvailableBreeds(RabbitBreed type) {
		String breed_origin;
		if(type.equals(RabbitBreed.HOLLAND_LOP)) {
			breed_origin="Netherlands";
		}
		else if(type.equals(RabbitBreed.MINI_REX)) {
			breed_origin="France";
		}
		else if(type.equals(RabbitBreed.LIONHEAD)) {
			breed_origin="Belgium";
		}
		else {
			breed_origin="Origin Unknown";
		}
		return breed_origin;
	}
}