<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'birthDate',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected $with = ['address'];

    public function address()
    {
        return $this->hasOne('App\Models\Address');
    }
}
